export default function (data) {
  if (this.cascaded) {
    this.localData = [this.processData(data, 0)]
  } else {
    this.localData = data.map(
      this.processData
    )
  }
}
