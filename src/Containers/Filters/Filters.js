import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filters = ({ startDate = new Date(), endDate = new Date(), onChangeDate }) => {
	return (
		<form>
			<div className="row around-xs bottom-xs">
				<div className="col-xs-12 col-sm-4">
					<span className="label fz-14 color-light">Period</span>
					<div className="row">
						<div className="col-xs-12 col-sm">
							<fieldset>
								<DatePicker
									selected={startDate}
									placeholderText="Click to select a start date"
									dateFormat="yyyy-MM-dd"
									todayButton="Today"
									onChange={onChangeDate}
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
									placeholderText="Click to select a end date"
									dateFormat="yyyy-MM-dd"
									todayButton="Today"
									onChange={onChangeDate}
								/>
							</fieldset>
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-sm-4">
					<div className="row">
						<div className="col-xs-12 col-sm-4">
							<span className="label fz-14 color-light">Start hour</span>
							<fieldset>
								<DatePicker
									selected={startDate}
									placeholderText="Click to select a start date"
									todayButton="Today"
									onChange={onChangeDate}
									showTimeSelect
									showTimeSelectOnly
									timeIntervals={15}
									timeCaption="Time"
									dateFormat="h:mm aa"
								/>
							</fieldset>
						</div>
						<div className="col-xs-12 col-sm-4">
							<span className="label fz-14 color-light">End hour</span>
							<fieldset>
								<DatePicker
									selected={endDate}
									placeholderText="Click to select a end date"
									todayButton="Today"
									onChange={onChangeDate}
									showTimeSelect
									showTimeSelectOnly
									timeIntervals={15}
									timeCaption="Time"
									dateFormat="h:mm aa"
								/>
							</fieldset>
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-sm-2">
					<button className="bg-blue color-white">REFRESH</button>
				</div>
			</div>
		</form>
	);
};

export default Filters;
