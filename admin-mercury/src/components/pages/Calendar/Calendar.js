import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { Component } from "react";

import MediaQuery from "react-responsive";
import BigCalendar from "react-big-calendar";
import BookingCalendar from "react-booking-calendar";
import moment from "moment";

import EventsConfig from "./../../config/EventsConfig";
import BookingConfig from "./../../config/BookingConfig";
import Event from "./Event";
import './Calendar.css'

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[2]);
BigCalendar.momentLocalizer(moment);

export default class Calendar extends Component {
    render() {
        return (
            <div className="Calendar">
                <MediaQuery maxDeviceWidth={765}>
                    <div className="Container">
                        <BookingCalendar bookings={BookingConfig} />
                    </div>
                </MediaQuery>

                <MediaQuery minDeviceWidth={768}>
                    <div className="Container">
                        <React.Fragment>
                            <BigCalendar
                                popup
                                events={EventsConfig}
                                views={{ month: true, week: true, day: true }}
                                defaultDate={new Date(2018, 1, 1)}
                                components={{ event: Event }}
                            />
                        </React.Fragment>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}
