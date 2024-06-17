// import CountUp from 'react-countup';

const Row = ({ title, value }) => {
  return (
    <li>
        <p>{title}</p>
        <p>{value}</p>
        {/* <p>
            <CountUp 
                end={value} 
                enableScrollSpy={true}
                scrollSpyOnce={true}
                duration={6}
            />
        </p> */}
    </li>
  )
}

export default Row