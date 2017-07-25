export default () => (
  <div>
    <h1>news list</h1>
    <ul>
      <li>new 1</li>
      <li>new 2</li>
      <li>new 3</li>
      <li>new 4</li>
    </ul>
    <style jsx>{`
      h1 {
        font-family: "Arial";
        color: red;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
        color: blue;
      }
    `}</style>
  </div>
)