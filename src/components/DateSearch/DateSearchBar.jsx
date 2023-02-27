import "react-date-range/dist/styles.css";
import React from "react";
import'./dateSearchBar.css'
import {DateRangePicker} from "react-date-range";
import {addDays} from "date-fns";
import {useState} from "react";


const DateSearchBar = ()=>{
    // const [isOpen, setIsOpen] = useState(false);
    const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection'
		}
	]);
    // const checkIfClickedOutside = e => {
	// 	if (isOpen && pickerRef.current && !pickerRef.current.contains(e.target)) {
	// 		setIsOpen(false)
	// 	}
	// }

	
return (
<div className="date-search-bar" ref={pickerRef}>
			<div className="date-search-bar__text-box" onClick={() => setIsOpen(prev => !prev)}>
				<FaRegCalendarMinus/>
				<span>{`${format(dates[0].startDate, 'PP')} - ${format(dates[0].endDate, 'PP')}`}</span>
			</div>

			{isOpen && (
				<div className="date-search-bar__picker">
					<DateRangePicker
						onChange={item => setDates([item.selection])}
						showSelectionPreview={true}
						moveRangeOnFirstSelection={false}
						months={1}
						ranges={dates}
						direction="horizontal"
					/>
				</div>)
			}
		</div>

)

}
export default DateSearchBar;