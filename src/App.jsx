import { ColumnDirective, ColumnsDirective, GridComponent,
  Inject, Sort } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

import './App.css'

function App() {
const sortOptions ={
  columns: [{field: 'CustomerID', direction:'Ascending'}]
}
  const sortComparer = (reference, comparer) => {
        if (reference < comparer) {
            return 1;
        }
        if (reference > comparer) {
            return -1;
        }
        return 0;
    };

  return <div style={{padding:'20px'}}>
    <GridComponent  dataSource={data} allowSorting={true} 
      //sortSettings={sortOptions} 
      allowMultiSorting={true} >
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' 
             textAlign="Right"/>
            <ColumnDirective field='CustomerID' sortComparer={sortComparer} headerText='Customer ID' width='100'/>
            <ColumnDirective field='Freight' headerText='Freight' width='100' 
             format='C2' textAlign="Right" />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='100' 
             format='yMd' textAlign="Right"/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'
          />
        </ColumnsDirective>
        <Inject services={[Sort]}/>
    </GridComponent></div>
}

export default App
