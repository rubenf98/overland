import React, { useEffect } from "react";
import styled from "styled-components";
import ScrollToTop from "./helpers/ScrollToTop";
import ThemeContainer from "./helpers/ThemeContainer";
import { setCookiesVisibility } from "../redux/application/actions";
import { connect } from "react-redux";
import Navbar from "./client/common/Navbar";
import Footer from "./client/common/Footer";

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0px 30px;
`;

export const Layout = (props) => {

    return (
        <ThemeContainer>

            <ScrollToTop>
                <Container>
                    <Navbar />
                    <div> {props.children} </div>
                    <Footer />
                </Container>
            </ScrollToTop>
        </ThemeContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCookiesVisibility: (state) => dispatch(setCookiesVisibility(state)),
    };
};

export default connect(null, mapDispatchToProps)(Layout);
