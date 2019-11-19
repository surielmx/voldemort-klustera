import React from 'react';
import Container from '../../Components/Container';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filters = ({
	startDate,
	endDate,
	startHour,
	endHour,
	isDisabledButton,
	onChangeFilter,
	onSubmit,
}) => {
	return (
		<Container>
			<form onSubmit={onSubmit}>
				<div className="row around-xs bottom-xs">
					<div className="col-xs-12 col-sm-5 col-md-4">
						<span className="label fz-14 color-light">Period</span>
						<div className="row">
							<div className="col-xs-12 col-sm">
								<fieldset>
									<DatePicker
										selected={startDate}
										placeholderText="Start date"
										dateFormat="yyyy-MM-dd"
										todayButton="Today"
										onChange={date => onChangeFilter('startDate', date)}
									/>
									{/* <img
									src="https://developer.chrome.com/devsummit/_includes/add-to-cal/assets/calendar-icon-62e60571.svg"
									alt="calendar icon"
								/> */}
								</fieldset>
							</div>
							<div className="col-xs-12 col-sm">
								<fieldset>
									<DatePicker
										selected={endDate}
										placeholderText="End date"
										dateFormat="yyyy-MM-dd"
										todayButton="Today"
										onChange={date => onChangeFilter('endDate', date)}
									/>
								</fieldset>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-4">
						<div className="row">
							<div className="col-xs-12 col-sm-5">
								<span className="label fz-14 color-light">Start hour</span>
								<fieldset>
									<DatePicker
										selected={startHour}
										placeholderText="Start hour"
										todayButton="Today"
										onChange={date => onChangeFilter('startHour', date)}
										showTimeSelect
										showTimeSelectOnly
										timeIntervals={60}
										timeCaption="Time"
										dateFormat="h aa"
									/>
								</fieldset>
							</div>
							<div className="col-xs-12 col-sm-5">
								<span className="label fz-14 color-light">End hour</span>
								<fieldset>
									<DatePicker
										selected={endHour}
										placeholderText="End hour"
										todayButton="Today"
										onChange={date => onChangeFilter('endHour', date)}
										showTimeSelect
										showTimeSelectOnly
										timeIntervals={60}
										timeCaption="Time"
										dateFormat="h aa"
									/>
								</fieldset>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-2">
						<button className="bg-blue color-white" disabled={isDisabledButton}>
							REFRESH
						</button>
					</div>
				</div>
			</form>
		</Container>
	);
};

export default Filters;
