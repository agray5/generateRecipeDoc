const getHeightAndWidthFromDataUrl = dataURL => new Promise(resolve => {
  const img = new Image()
  img.onload = () => {
    resolve({
      height: img.height,
      width: img.width
    })
  }
  img.src = dataURL
});

const obscureEmail = (email) => {
  const [name, domain] = email.split('@');
  return `${name[0]}${new Array(name.length).join('*')}@${domain}`;
};

const exportDef =  ({
  getHeightAndWidthFromDataUrl,
  obscureEmail
})

export default exportDef