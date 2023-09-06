import "./about.css"
export default function About() {
  const handleDownload = () => {
    const imageURL = '/src/aboutF/lab.png';
  
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'lab.png';
  
    link.addEventListener('error', () => {
      console.error('Failed to load the image.');
      // Handle the error, such as displaying an error message or providing a fallback image.
    });
  
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
  };
  return (
    <div>
      <section className="about">
        <h2>About Me</h2>
        <div className="resume">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button onClick={handleDownload}>Download Resume</button>
        </div>
        
      </section>
    </div>
  );
}
