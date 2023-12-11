import React from 'react';
import './Projects.css'; // Import the CSS file

function Projects() {
  const smartDermaAidGitHubLink = 'https://github.com/Rakesh20bci7051/Smart-DermaAid';
  const compressMeGitHubLink = 'https://github.com/Rakesh20bci7051/CompressMe.com';

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div>
        <h3>
          1. Smart DermaAid
          <a href={smartDermaAidGitHubLink} target="_blank" rel="noopener noreferrer">
            (GitHub)
          </a>
        </h3>
        <p>
          Designed and developed a smart and intelligent machine with an integrated camera, capable of accurately identifying a wide range of skin diseases. Users can easily scan the affected area, and the machine will swiftly diagnose the specific skin condition, We had trained the model with using transfer learning technique. We had used the optmized CNN like Resnet,VGG16 and VGG19. After Training the model we deployed it on raspberry pi.
          <br />
<span style={{ fontWeight: 'bold', color: '#3498db' }}>
          Tech Stack: Machine learning, Deep learning, TensorFlow, Image classification, and object Detection, Raspberry Pi.
</span>
        </p>

        {/* Add your YouTube video embed code */}
        <div>
          <h4>Project Demo</h4>
          <iframe
            width="50%"
            height="315"
            src="https://www.youtube.com/embed/1b2RM-Vqra0"
            title="Smart DermaAid Project Demo"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div>
        <h3>
          2. CompressMe.com
          <a href={compressMeGitHubLink} target="_blank" rel="noopener noreferrer">
            (GitHub)
          </a>
        </h3>
        <p>
Developed a robust file compression website that offers the
ability to compress a wide variety of files, including text
documents, PDFs, and presentations. Users can simply upload
their files, and our platform efficiently reduces their size without
compromising content quality. The website enhances user
convenience and data management by providing a valuable file
compression service.
          <br />
          <span style={{ fontWeight: 'bold', color: '#3498db' }}>
            Tech Stack: Java Servlets, HTML, CSS, JavaScript, JDBC, and MySQL
          </span>
        </p>
      </div>
<hr></hr>
<div>
  <h3>Coding Website Ranks</h3>
  <ul>
    <li>
      <a href="https://auth.geeksforgeeks.org/user/rakeshmehta20bci7051/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user/" target="_blank" rel="noopener noreferrer">
        <img src="https://camo.githubusercontent.com/b17e77fe02acfe536bb17122ecd15e2721bb605aba29862b85424012b7cf8c55/68747470733a2f2f6d656469612e6765656b73666f726765656b732e6f72672f77702d636f6e74656e742f63646e2d75706c6f6164732f32303139303731303130323233342f646f776e6c6f6164332e706e67" alt="GeeksforGeeks Logo" width="50" height="50"></img>
      </a>
      <strong><a href="https://auth.geeksforgeeks.org/user/rakeshmehta20bci7051/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user">GeeksforGeeks</a>:1st Rank in the university and 7007 in world wide.</strong>
    </li>
    <li>
      <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://nighteye.app/wp-content/uploads/2021/04/LeetCode-blog-dark-mode.png.webp" alt="LeetCode Logo" width="50" height="50"></img>
      </a>
<br></br>
      <strong><a href="https://leetcode.com/user6666h/">LeetCode</a>:50 problems of DSA</strong>
    </li>
    <li>
      <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEUNFB4A6mT///8AAAANEh4NBR0A6GQNABoACxgFDhoNABcA7WU5PUMkKTAHm0gFv1UAABOwsbO/wMLr7O0AAAUYHibx8fKLjI8AAAuZmp0Jdjusra68vb/39/dMlznKAAAA/ElEQVR4nO3cOQ7CMBRF0YCBBMI8j/vfJkICiriBSETi65z6Fb5KFRcuCgAAAAAAAAAAAAAAAAAAAICPjRu+Xg3a6STucfK0bDrmq202Su/Gshy2UnYUuNv3mw5Z4vaUjTbVK/Bc90Yt1PNuEqtpdvb+KjVXaZ2vZs+PWM7rXhv1YqJQoUKFChUqVKhQoUKFChUqVKhQoUKFChX+uPCSMtdYhbdN5har8DMKFSpUqFChQoUKFSpUqFDhvxfG/8ePf08T/65NoUKFChUqVKhQoUKFChUqVKhQoUKFChVGLIz/pkL8dzGK+G+bAAAAAAAAAAAAAAAAAAAAAH/tDsvlYejehUEgAAAAAElFTkSuQmCC" alt="HackerRank Logo" width="50" height="50"></img>
      </a>
<br></br>
      <strong><a href ="https://www.hackerrank.com/skills-verification">HackerRank</a>:SQL,JAVA AND Software intern certified</strong>
    </li>
    <li>
      <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer">
        <img src="data:image/png;base64,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" width="50" height="50"></img>
      </a>
<br></br><br></br>
      <strong><a href="https://www.kaggle.com/luckymehta">Kaggle</a>:50+ Notebooks for different Machine learning and Data analysis projects.</strong>
    </li>
  </ul>
</div>
<hr></hr>

    </section>
  );
}

export default Projects;
