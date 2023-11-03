import React, { useEffect } from "react";
import styled from "styled-components";
import ScrollToTop from "./helpers/ScrollToTop";
import ThemeContainer from "./helpers/ThemeContainer";
import { handleForm } from "../redux/application/actions";
import { connect } from "react-redux";
import Navbar from "./client/common/Navbar";
import Footer from "./client/common/Footer";
import FormContainer from "./client/FormContainer";

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    /* padding: ${props => props.enable ? "0px 30px" : "0px"}; */
`;

export const Layout = (props) => {
    return (
        <ThemeContainer>
            <FormContainer initForm={props.formVisible} handleVisibility={props.handleForm} />
            <ScrollToTop>
                <Container enable={props.enable}>
                    {props.enable && <Navbar />}
                    <div> {props.children} </div>
                    {props.enable && <Footer />}
                </Container>
            </ScrollToTop>
        </ThemeContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        formVisible: state.application.formVisible
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (visibility) => dispatch(handleForm(visibility)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);
