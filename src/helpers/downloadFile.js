const downloadFile = (file) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    const blob = new Blob([reader.result], { type: file.type })
    const objectUrl = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.style.display = 'none'
    document.body.appendChild(link)
    link.href = objectUrl
    link.href = URL.createObjectURL(blob)
    link.download = file.name
    link.click()
  }
}

export default downloadFile
