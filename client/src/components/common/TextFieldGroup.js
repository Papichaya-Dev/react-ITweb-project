import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Slot = styled.input`
	border: 0;
	background: none;
	display: block;
	margin: 20px auto;
	text-align: center;
	border: 2px solid #3498db;
	padding: 14px 10px;
	width: 300px;
	outline: none;
	color: white;
	border-radius: 24px;
	transition: 0.25s;
    margin-left:-30px;
	:focus {
		width: 280px;
		border-color: #a6009b;
	}
`;

const TextFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
    return (
        <span>
        <div className="form-group">
        <Slot 
        type={type}
        className={classnames({
          'is-invalid': error
          
      })} 
        placeholder={placeholder} 
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
         />
         {info && <small className="form-text text-muted">{info}</small>}
          {error && (<div className="invalid-feedback">{error}</div>)}
      </div>
      </span>
    );
};

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    disabled:PropTypes.string 
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;