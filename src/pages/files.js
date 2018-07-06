import React from "react";

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Site Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>size</th>
            <th>birthTime</th>
          </tr>
        </thead>
      <tbody>
        {data.allFile.edges.map(({ node }, index) =>
          <tr key={index}>
            <td>
              {node.relativePath}
            </td>
            <td>
              {node.size}
            </td>
            <td>
              {node.birthTime}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)
}

export const query = graphql`
  query FilesQuery {
      allFile {
        edges {
          node {
            relativePath
            size
            birthTime(fromNow: true)
          }
        }
      }
    }
`
