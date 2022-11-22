import Table from 'react-bootstrap/Table';

function Tabela() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Teste</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>X</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>2</td>
          <td>inicio</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Z</td>
        </tr> 
        
      </tbody> 
    </Table>
  );
}

export default Tabela;