
async function changeBackground(theme) {
    height= window.screen.availHeight;
    width=window.screen.availWidth;
    const response = await fetch(`https://source.unsplash.com/featured/${width}x${height}/?${theme}`);
    document.querySelector('body').style.backgroundImage = `url("${response.url}")`;
}

module.exports= { changeBackground }