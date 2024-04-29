import React, { useState, useEffect } from 'react';
import './CertificateDetails.css'; // Create a CSS file for styling
import { BACKEND_URL } from '../../App';
import SuspenseAndErrorBoundary from '../../SuspendError';
import faker from 'faker';

export default function Achievements() {

    // Function to generate a random date string between two dates
    const randomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
    };

    function generateRandomImageUrl(keyword, width, height) {
        return `https://source.unsplash.com/${width}x${height}/?${keyword}`;
    }

    function generateEventName() {
        return faker.fake("{{lorem.words}} {{company.bsNoun}}");
    }

    // Function to generate certificates using Faker
    const generateCertificates = (count) => {
        const certificates = [];
        
        for (let i = 0; i < count; i++) {
            const eventName = generateEventName();
            const certificate = {
                photo: generateRandomImageUrl(eventName, 300, 200),
                eventName,
                eventDate: randomDate(new Date(2020, 0, 1), new Date()),
                eventPlace: faker.address.city(),
                eventType: faker.random.arrayElement(['Competition', 'Workshop', 'Seminar', 'Charity Event']),
                mainActivity: faker.lorem.words()
            };
            certificates.push(certificate);
        }
        return certificates;
    };

    // Generate 20 certificates
    const certificatesObj = generateCertificates(20);


    const certificatesObjMain = [
        {
            photo: 'image1.jpg',
            eventName: 'Certificate of Excellence',
            eventDate: '2023-05-15',
            eventPlace: 'Virtual',
            eventType: 'Competition',
            mainActivity: 'Project Presentation',
        },
        {
            photo: 'image2.jpeg',
            eventName: 'Participation Certificate',
            eventDate: '2023-08-20',
            eventPlace: 'Online',
            eventType: 'Workshop',
            mainActivity: 'Hands-on Training',
        },
        {
            photo: 'image3.png',
            eventName: 'Achievement Award',
            eventDate: '2023-10-10',
            eventPlace: 'Local Community Center',
            eventType: 'Seminar',
            mainActivity: 'Guest Speaker',
        },
        {
            photo: 'image4.jpeg',
            eventName: 'Volunteer Recognition',
            eventDate: '2024-02-28',
            eventPlace: 'City Hall',
            eventType: 'Charity Event',
            mainActivity: 'Community Cleanup',
        },
        ...certificatesObj
    ];

    return (
        <SuspenseAndErrorBoundary>
            <div className="certificates-list">
                <h2>Get Certificate Details</h2>
                <div className="certificate-grid m-20">
                    {certificatesObjMain.map((certificate, index) => (
                        <div className="certificate-card" key={index}>
                            <img
                                src={index > 3 ? certificate.photo : `../certificate.photo/${certificate.photo}`}
                                alt="Certificate"
                            />
                            <h3>{certificate.eventName}</h3>
                            <p>Event Date: {certificate.eventDate}</p>
                            <p>Event Place: {certificate.eventPlace}</p>
                            <p>Event Type: {certificate.eventType}</p>
                            <p>Main Activity: {certificate.mainActivity}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SuspenseAndErrorBoundary>
    );
}
