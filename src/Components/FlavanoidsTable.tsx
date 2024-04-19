import { Table } from '@mantine/core';

function FlavanoidsTable({stats} :any) {
  return (
    <Table stickyHeader stickyHeaderOffset={60}  className='border-collapse w-1/2 mx-auto border-2 border-[#ddd] shadow-xl'>
      <Table.Thead>
        <Table.Tr className='border-2 border-[#ddd]'>
          <Table.Th align="left" className='p-3'>Measures</Table.Th>
          {Object.keys(stats).map(alcoholClass => (
              <Table.Th align="left" key={alcoholClass} className='p-3'>Class {alcoholClass}</Table.Th>
            ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr  className='border-2 border-[#ddd]'>
        <Table.Td className='p-3'>Flavanoids Mean</Table.Td>
        {Object.keys(stats).map(alcoholClass => (
              <Table.Td key={alcoholClass} className='p-3'>{stats[alcoholClass].mean.toFixed(3)}</Table.Td>
            ))}
        </Table.Tr>
            <Table.Tr className='border-2 border-[#ddd]'>
        <Table.Td className='p-3'>Flavanoids Median</Table.Td>
        {Object.keys(stats).map(alcoholClass => (
              <Table.Td key={alcoholClass} className='p-3'>{stats[alcoholClass].median.toFixed(3)}</Table.Td>
            ))}
            </Table.Tr>
            <Table.Tr className='border-2 border-[#ddd]'>
        <Table.Td className='p-3'>Flavanoids Mode</Table.Td>
        {Object.keys(stats).map(alcoholClass => (
              <Table.Td key={alcoholClass} className='p-3'>{stats[alcoholClass].mode.toFixed(3)}</Table.Td>
            ))}
            </Table.Tr>
      </Table.Tbody>
      <Table.Caption className='text-xl font-bold text-black my-5'>Flavanoids Table</Table.Caption>
    </Table>
  );
}


export default FlavanoidsTable