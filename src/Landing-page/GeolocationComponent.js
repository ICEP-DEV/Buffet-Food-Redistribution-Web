// import React, { useState, useEffect } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import { getDistance } from 'geolib';

// const GeolocationComponent = ({ recipientLocation, onRequestDecision }) => {
//     const [donorLocation, setDonorLocation] = useState(null);
//     const [distance, setDistance] = useState(null);
//     const [travelTime, setTravelTime] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [showDecision, setShowDecision] = useState(false);

//     useEffect(() => {
//         if ("geolocation" in navigator) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     setDonorLocation({
//                         latitude: position.coords.latitude,
//                         longitude: position.coords.longitude
//                     });
//                     console.log("Geolocation obtained:", position.coords);
//                 },
//                 (error) => {
//                     console.error("Error getting geolocation: ", error);
//                 }
//             );
//         } else {
//             console.error("Geolocation is not supported by this browser.");
//         }
//     }, []);

//     const calculateTravelTime = (distanceInKm) => {
//         const averageSpeed = 50; // Average speed in km/h
//         const timeInHours = distanceInKm / averageSpeed;
//         const hours = Math.floor(timeInHours);
//         const minutes = Math.round((timeInHours - hours) * 60);
//         return { hours, minutes };
//     };

//     const handleAcceptLocation = () => {
//         if (donorLocation && recipientLocation) {
//             console.log("Donor Location:", donorLocation);
//             console.log("Recipient Location:", recipientLocation);

//             const distanceInMeters = getDistance(donorLocation, recipientLocation);
//             const distanceInKm = distanceInMeters / 1000; // Convert to kilometers
//             setDistance(distanceInKm);

//             const { hours, minutes } = calculateTravelTime(distanceInKm);
//             setTravelTime({ hours, minutes });
//             setShowModal(true);
//         } else {
//             console.error("Donor location or recipient location is missing.");
//         }
//     };

//     const handleOk = () => {
//         setShowModal(false);
//         setShowDecision(true);
//     };

//     const handleAcceptRequest = () => {
//         onRequestDecision(true, donorLocation, distance, travelTime);
//     };

//     const handleDeclineRequest = () => {
//         onRequestDecision(false, null, null, null);
//     };

//     return (
//         <div className="geolocation-component text-center mt-5">
//             <Button 
//                 variant="success" 
//                 onClick={handleAcceptLocation}
//                 className="mt-3 text-center"
//                 style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
//                 disabled={!donorLocation}
//             >
//                 Accept Recipient Location
//             </Button>

//             {distance !== null && (
//                 <Modal show={showModal} onHide={handleOk}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Distance to Recipient</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         The recipient is approximately {distance.toFixed(2)} kilometers away from you.
//                         <br />
//                         Estimated travel time: {travelTime?.hours} hours and {travelTime?.minutes} minutes.
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="primary" onClick={handleOk}>
//                             OK
//                         </Button>
//                     </Modal.Footer>
//                 </Modal>
//             )}

//             {showDecision && (
//                 <div className="mt-3">
//                     <h5>Do you want to accept this request?</h5>
//                     <Button 
//                         variant="success" 
//                         className="mr-2 text-center"
//                         style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
//                         onClick={handleAcceptRequest}
//                     >
//                         Accept
//                     </Button>
//                     <Button 
//                         variant="danger"
//                         style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
//                         onClick={handleDeclineRequest}
//                     >
//                         Decline
//                     </Button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default GeolocationComponent;


// import React, { useState, useEffect } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import { getDistance } from 'geolib';

// const GeolocationComponent = ({ recipientLocation, onRequestDecision }) => {
//     const [donorLocation, setDonorLocation] = useState(null);
//     const [distance, setDistance] = useState(null);
//     const [travelTime, setTravelTime] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [showDecision, setShowDecision] = useState(false);

//     useEffect(() => {
//         if ("geolocation" in navigator) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const location = {
//                         latitude: position.coords.latitude,
//                         longitude: position.coords.longitude
//                     };
//                     setDonorLocation(location);
//                     console.log("Geolocation obtained:", location);
//                 },
//                 (error) => {
//                     console.error("Error getting geolocation: ", error);
//                 }
//             );
//         } else {
//             console.error("Geolocation is not supported by this browser.");
//         }
//     }, []);

//     const calculateTravelTime = (distanceInKm) => {
//         const averageSpeed = 50; // Average speed in km/h
//         const timeInHours = distanceInKm / averageSpeed;
//         const hours = Math.floor(timeInHours);
//         const minutes = Math.round((timeInHours - hours) * 60);
//         return { hours, minutes };
//     };

//     // const handleAcceptLocation = () => {
//     //     if (donorLocation && recipientLocation) {
//     //         console.log("Donor Location:", donorLocation);
//     //         console.log("Recipient Location:", recipientLocation);

//     //         const distanceInMeters = getDistance(donorLocation, recipientLocation);
//     //         const distanceInKm = distanceInMeters / 1000; // Convert to kilometers
//     //         setDistance(distanceInKm);

//     //         const { hours, minutes } = calculateTravelTime(distanceInKm);
//     //         setTravelTime({ hours, minutes });
//     //         setShowModal(true);
//     //     } else {
//     //         console.error("Donor location or recipient location is missing.");
//     //     }
//     // };
//     const handleAcceptLocation = () => {
//         if (donorLocation && recipientLocation) {
//             // Verify donorLocation structure
//             if (!donorLocation.latitude || !donorLocation.longitude) {
//                 console.error("Donor location is missing latitude or longitude.");
//                 return;
//             }
    
//             // Verify recipientLocation structure
//             if (!recipientLocation.latitude || !recipientLocation.longitude) {
//                 console.error("Recipient location is missing latitude or longitude.");
//                 return;
//             }
    
//             console.log("Donor Location:", donorLocation);
//             console.log("Recipient Location:", recipientLocation);
    
//             try {
//                 const distanceInMeters = getDistance(donorLocation, recipientLocation);
//                 const distanceInKm = distanceInMeters / 1000; // Convert to kilometers
//                 setDistance(distanceInKm);
    
//                 const { hours, minutes } = calculateTravelTime(distanceInKm);
//                 setTravelTime({ hours, minutes });
//                 setShowModal(true);
//             } catch (error) {
//                 console.error("Error calculating distance:", error);
//             }
//         } else {
//             console.error("Donor location or recipient location is missing.");
//         }
//     };

//     const handleOk = () => {
//         setShowModal(false);
//         setShowDecision(true);
//     };

//     const handleAcceptRequest = () => {
//         onRequestDecision(true, donorLocation, distance, travelTime);
//     };

//     const handleDeclineRequest = () => {
//         onRequestDecision(false, null, null, null);
//     };

//     return (
//         <div className="geolocation-component text-center mt-5">
//             <Button 
//                 variant="success" 
//                 onClick={handleAcceptLocation}
//                 className="mt-3 text-center"
//                 style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
//                 disabled={!donorLocation} // remove this temporarily if necessary
//             >
//                 Accept Recipient Location
//             </Button>

//             {distance !== null && (
//                 <Modal show={showModal} onHide={handleOk}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Distance to Recipient</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         The recipient is approximately {distance.toFixed(2)} kilometers away from you.
//                         <br />
//                         Estimated travel time: {travelTime?.hours} hours and {travelTime?.minutes} minutes.
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="primary" onClick={handleOk}>
//                             OK
//                         </Button>
//                     </Modal.Footer>
//                 </Modal>
//             )}

//             {showDecision && (
//                 <div className="mt-3">
//                     <h5>Do you want to accept this request?</h5>
//                     <Button 
//                         variant="success" 
//                         className="mr-2 text-center"
//                         style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
//                         onClick={handleAcceptRequest}
//                     >
//                         Accept
//                     </Button>
//                     <Button 
//                         variant="danger"
//                         style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
//                         onClick={handleDeclineRequest}
//                     >
//                         Decline
//                     </Button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default GeolocationComponent;

import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { getDistance } from 'geolib';

const GeolocationComponent = ({ recipientLocation, onRequestDecision }) => {
    const [donorLocation, setDonorLocation] = useState(null);
    const [distance, setDistance] = useState(null);
    const [travelTime, setTravelTime] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showDecision, setShowDecision] = useState(false);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setDonorLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    console.log("Geolocation obtained:", position.coords);
                },
                (error) => {
                    console.error("Error getting geolocation: ", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const calculateTravelTime = (distanceInKm) => {
        const averageSpeed = 50; // Average speed in km/h
        const timeInHours = distanceInKm / averageSpeed;
        const hours = Math.floor(timeInHours);
        const minutes = Math.round((timeInHours - hours) * 60);
        return { hours, minutes };
    };

    const handleAcceptLocation = () => {
        if (donorLocation && recipientLocation) {
            console.log("Donor Location:", donorLocation);
            console.log("Recipient Location:", recipientLocation);

            const distanceInMeters = getDistance(donorLocation, recipientLocation);
            const distanceInKm = distanceInMeters / 1000; // Convert to kilometers
            setDistance(distanceInKm);

            const { hours, minutes } = calculateTravelTime(distanceInKm);
            setTravelTime({ hours, minutes });
            setShowModal(true);
        } else {
            console.error("Donor location or recipient location is missing.");
        }
    };

    const handleOk = () => {
        setShowModal(false);
        setShowDecision(true);
    };

    const handleAcceptRequest = () => {
        onRequestDecision(true, donorLocation, distance, travelTime);
    };

    const handleDeclineRequest = () => {
        onRequestDecision(false, null, null, null);
    };

    return (
        <div className="geolocation-component text-center mt-5">
            <Button 
                variant="success" 
                onClick={handleAcceptLocation}
                className="mt-3 text-center"
                style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
                disabled={!donorLocation}
            >
                Accept Recipient Location
            </Button>

            {distance !== null && (
                <Modal show={showModal} onHide={handleOk}>
                    <Modal.Header closeButton>
                        <Modal.Title>Distance to Recipient</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        The recipient is approximately {distance.toFixed(2)} kilometers away from you.
                        <br />
                        Estimated travel time: {travelTime?.hours} hours and {travelTime?.minutes} minutes.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleOk}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}

            {showDecision && (
                <div className="mt-3">
                    <h5>Do you want to accept this request?</h5>
                    <Button 
                        variant="success" 
                        className="mr-2 text-center"
                        style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
                        onClick={handleAcceptRequest}
                    >
                        Accept
                    </Button>
                    <Button 
                        variant="danger"
                        style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                        onClick={handleDeclineRequest}
                    >
                        Decline
                    </Button>
                </div>
            )}
        </div>
    );
};

export default GeolocationComponent;