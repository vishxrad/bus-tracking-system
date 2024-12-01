interface BusStatusProps {
  status: 'ON_TIME' | 'DELAYED' | 'AHEAD';
}

export default function BusStatus({ status }: BusStatusProps) {
  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs
      ${status === 'ON_TIME' ? 'bg-green-100 text-green-800' :
        status === 'DELAYED' ? 'bg-red-100 text-red-800' :
        'bg-blue-100 text-blue-800'}`}>
      {status}
    </div>
  );
}