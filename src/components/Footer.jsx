import React, { useEffect, useState } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the currentYear state to the current year
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <div className='text-white text-center bg-black py-4'>
        <p>Copyright &copy; {currentYear}. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
