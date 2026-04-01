param(
  [Parameter(Mandatory = $true)]
  [string]$ImagePath
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
$null = [Windows.Storage.Streams.RandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType = WindowsRuntime]

function Await-Op($Operation, [Type]$ResultType) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object { $_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 } |
    Select-Object -First 1
  $generic = $method.MakeGenericMethod(@($ResultType))
  $task = $generic.Invoke($null, @($Operation))
  return $task.GetAwaiter().GetResult()
}

$file = Await-Op ([Windows.Storage.StorageFile]::GetFileFromPathAsync($ImagePath)) ([Windows.Storage.StorageFile])
$stream = Await-Op ([Windows.Storage.Streams.RandomAccessStream]::OpenAsync($file, [Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStreamWithContentType])
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
