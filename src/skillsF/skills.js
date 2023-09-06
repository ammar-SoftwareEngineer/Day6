import "./skills.css";
export default function Skills() {
  return (
    <div>
      <section className="skills">
        <h2>Skills</h2>
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

        <section className="pro">
          <div className="box">
            <h3>My Focus</h3>
            <ul>
              <li>UI/UUX Design</li>
              <li>Responsive Design</li>
              <li>Web Design</li>
              <li>Mobile App Design</li>
            </ul>
          </div>
          <div className="process">
            <ul>
              <li>Html <span></span></li>
              <li>css <span></span></li>
              <li>javascript <span></span></li>
              <li>React <span></span></li>
              <li>photoshop <span></span></li>
              <li>adobe Xd <span></span></li>
              <li>Node js <span></span></li>
              <li>wordpress <span></span></li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
}
