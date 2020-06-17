import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundPost = styled.textarea`
background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
`
const TextPost = styled.div`font-family: 'Kanit', sans-serif;`;

const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    error,
    info,
    onChange,
}) => {
    return (
        <div className="form-group">
        <BackgroundPost
        className={classnames('form-control form-control-lg',{
          'is-invalid': error
          
      })} 
        placeholder={placeholder} 
        name={name}
        value={value}
        onChange={onChange}
         />
         {info && <small className="form-text text-muted">{info}</small>}
          {error && (<div className="invalid-feedback">{error}</div>)}
      </div>
    );
};

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange:PropTypes.func.isRequired,
};



export default TextAreaFieldGroup;