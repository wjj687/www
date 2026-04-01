param(
  [Parameter(Mandatory = $true)]
  [string]$PdfPath,

  [Parameter(Mandatory = $true)]
  [uint32]$PageIndex,

  [uint32]$RenderWidth = 1800
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime]
$null = [Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType = WindowsRuntime]

function Await-Op($Operation, [Type]$ResultType) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object { $_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 } |
    Select-Object -First 1
  $generic = $method.MakeGenericMethod(@($ResultType))
  $task = $generic.Invoke($null, @($Operation))
  return $task.GetAwaiter().GetResult()
}

function Await-Action($Operation) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object { $_.Name -eq 'AsTask' -and -not $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 } |
    Select-Object -First 1
  $task = $method.Invoke($null, @($Operation))
  $task.GetAwaiter().GetResult() | Out-Null
}

$file = Await-Op ([Windows.Storage.StorageFile]::GetFileFromPathAsync($PdfPath)) ([Windows.Storage.StorageFile])
$document = Await-Op ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) ([Windows.Data.Pdf.PdfDocument])
$page = $document.GetPage($PageIndex)
$stream = [Windows.Storage.Streams.InMemoryRandomAccessStream]::new()
$renderOptions = [Windows.Data.Pdf.PdfPageRenderOptions]::new()
$renderOptions.DestinationWidth = $RenderWidth
Await-Action ($page.RenderToStreamAsync($stream, $renderOptions))
$stream.Seek(0)

$decoder = Await-Op ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
$bitmap = Await-Op ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
$result = Await-Op ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])

$result.Lines | ForEach-Object { $_.Text }

if ($bitmap -and $bitmap -is [System.IDisposable]) {
  $bitmap.Dispose()
}
if ($stream -and $stream -is [System.IDisposable]) {
  $stream.Dispose()
}
if ($page -and $page -is [System.IDisposable]) {
  $page.Dispose()
}
