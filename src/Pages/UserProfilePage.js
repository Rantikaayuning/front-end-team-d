import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import { StyledProfile, StyledWatchlist, GroupButton, StyledDetail, StyledBackground } from '../assets/styles/styled';
import imgProfile from '../assets/Images/noprofile.png'

const UserProfilePage = () => {
    return (
        <StyledBackground>
            <StyledProfile>
                <StyledDetail>
                    <img src={imgProfile} alt='profilepage' />
                    <p>Username :</p>
                    <p>email :</p>
                    <Link to='/' ><GroupButton outline color='secondary'>Back</GroupButton></Link>
                    <Link to='/user-setting-page' ><GroupButton outline color='primary'>Update Profile</GroupButton></Link>
                </StyledDetail>
                <StyledWatchlist>
                    <h5>Watchlist</h5>
                    <Card>
                        <img width="100%" src={imgProfile} alt="Card cap" />
                        <CardTitle tag="h6">Movie title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Genre</CardSubtitle>
                    </Card>
                </StyledWatchlist>
            </StyledProfile>
        </StyledBackground>
    )
}

export default UserProfilePage;