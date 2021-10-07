import React from 'react';

export default function ErrorMessage(props) {
    return <span className={"errorMessage"}>{props.error}</span>
}