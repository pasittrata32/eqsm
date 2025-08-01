import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { BookingForm } from '../components/booking/BookingForm';

const AdminBorrowPage = () => {
    return (
        <PageWrapper title="adminBorrow">
            <BookingForm isAdmin={true} />
        </PageWrapper>
    );
};

export default AdminBorrowPage;
