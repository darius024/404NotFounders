import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  width: 40%;  // Full width of its container
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ProfileName = styled.h1`
  margin: 0;
  color: #333;
`;

const InfoSection = styled.section`
  margin-top: 10px;
`;

const InfoItem = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

// Assuming profile information comes in as a prop
const Profile = ({ employee }) => {
    return (
        <ProfileContainer>
            <ProfileHeader>
                <ProfileImage src={employee.image || "https://via.placeholder.com/100"} alt={`${employee.name}`} />
                <ProfileName>{employee.name}</ProfileName>
            </ProfileHeader>
            <InfoSection>
                <InfoItem>
                    <Label>Position: </Label>{employee.position}
                </InfoItem>
                <InfoItem>
                    <Label>Department: </Label>{employee.department}
                </InfoItem>
                <InfoItem>
                    <Label>Email: </Label>{employee.email}
                </InfoItem>
                <InfoItem>
                    <Label>Phone: </Label>{employee.phone}
                </InfoItem>
            </InfoSection>
        </ProfileContainer>
    );
};

export default Profile;
