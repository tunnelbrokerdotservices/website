/* eslint-disable react/react-in-jsx-scope */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React, { useEffect } from 'react';
class MyDocument extends Document {
    render () {
        return (
            <Html lang="en">
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;