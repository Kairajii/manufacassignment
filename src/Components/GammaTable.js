import { Table } from '@mantine/core';



function GammaTable({stats}) {
  

  return (
    <Table stickyHeader stickyHeaderOffset={60}  className='border-collapse w-1/2 mx-auto shadow-xl'>
      <Table.Thead>
        <Table.Tr className='border-2 border-[#ddd]'>
          <Table.Th align="left" className='p-3'>Measures</Table.Th>
          {Object.keys(stats).map(alcoholClass => (
              <Table.Th align="left" key={alcoholClass} className='p-3'>Class {alcoholClass}</Table.Th>
            ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr className='border-2 border-[#ddd] '>
        <Table.Td align="left" className='p-3'>Gamma Mean</Table.Td>
        {Object.keys(stats).map(alcoholClass => (
              <Table.Td key={alcoholClass} className='p-3'>{stats[alcoholClass].mean.toFixed(3)}</Table.Td>
            ))}
        </Table.Tr>
            <Table.Tr className='border-2 border-[#ddd]'>
        <Table.Td align="left" className='p-3'>Gamma Median</Table.Td>
        {Object.keys(stats).map(alcoholClass => (
              <Table.Td key={alcoholClass} className='p-3'>{stats[alcoholClass].median.toFixed(3)}</Table.Td>
            ))}
            </Table.Tr>
            <Table.Tr className='border-2 border-[#ddd]'>
        <Table.Td align="left" className='p-3'>Gamma Mode</Table.Td>
        {Object.keys(stats).map(alcoholClass => (
              <Table.Td key={alcoholClass} className='p-3'>{stats[alcoholClass].mode.toFixed(3)}</Table.Td>
            ))}
            </Table.Tr>
      </Table.Tbody>
      <Table.Caption className='text-xl font-bold text-black my-5'>Gamma Table</Table.Caption>
      
    </Table>
  );
}


export default GammaTable