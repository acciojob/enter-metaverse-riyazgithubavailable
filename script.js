//your JS code here. If required.
function convertToH1() {
    // Select the <p> tag
    const paragraph = document.getElementById('status');
    
    // Create a new <h1> element
    const heading = document.createElement('h1');
    
    // Set the content of the <h1> to be the same as the <p> tag
    heading.textContent = "Entered Metaverse";
    
    // Replace the <p> tag with the new <h1> tag
    paragraph.replaceChild(heading, paragraph);
}