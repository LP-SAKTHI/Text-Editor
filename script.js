function bold()
{
    document.getElementById('text').style.fontWeight = "bold"
}

function removeBold()
{
    document.getElementById('text').style.fontWeight = "normal"
}

function italic()
{
    document.getElementById('text').style.fontStyle = "italic";
}

function removeItalic()
{
    document.getElementById('text').style.fontStyle = "normal"
}

function underline()
{
    document.getElementById('text').style.textDecoration = "underline"
}

function removeUnderline()
{
    document.getElementById('text').style.textDecoration = "none"
}

function right()
{
    document.getElementById('text').style.textAlign = "right"
}

function removeRight()
{
    document.getElementById('text').style.textAlign = "left"
}

function center()
{
    document.getElementById('text').style.textAlign = "center"
}

function removeCenter()
{
    document.getElementById('text').style.textAlign = "left"
}

function lower()
{
    document.getElementById('text').style.textTransform = "lowercase"
}

function upper()
{
    document.getElementById('text').style.textTransform = "uppercase"
}

function clears()
{
    document.getElementById('text').style.fontWeight = "normal";
    document.getElementById('text').style.fontStyle = "normal";
    document.getElementById('text').style.textAlign = "left";
    document.getElementById('text').style.textTransform = "lowercase"
    document.getElementById('text').value = ""
}

