import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { BookingForm } from '../components/booking/BookingForm';

const BookingPage = () => {
    return (
        <PageWrapper title="booking">
            <BookingForm isAdmin={false} />
        </PageWrapper>
    );
};

export default BookingPage;
