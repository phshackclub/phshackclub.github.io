import React from 'react';
import Iframe from 'react-iframe';
import SiteLayout from '../SiteLayout';

const Calendar = () => {
    return (
        <SiteLayout>
            <h1>Calendar</h1>
            <div style={{ margin: '16px 0' }}>
                <Iframe url="https://calendar.google.com/calendar/embed?src=psdschools.org_2b1g6ji9tv9hes33vq363gcaac%40group.calendar.google.com&ctz=America%2FDenver" styles={{ border: 0 }} />
            </div>
        </SiteLayout>
    )
}

export default Calendar;
