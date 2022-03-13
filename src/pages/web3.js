import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import { AboutPageWrapper } from '../styles/about/AboutStyles';
import { injected } from '../components/wallet/connector';
import { useWeb3React } from '@web3-react/core';

const web3 = ({ path, data }) => {
  const {
    active,
    account,
    library,
    connector,
    activate,
    deactivate,
  } = useWeb3React();
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  const disconnect = async () => {
    try {
      await deactivate(library);
    } catch (ex) {
      console.log('ex', ex);
    }
  };
  const seo = {
    page: 'web3',
    title: 'About Me',
    imgAlt:
      'jdcastro logo, twitter, instagram, facebook, github icons with @jacobdcastro username',
    breadcrumbs: [
      {
        name: 'Web3',
        path: '/web3',
      },
    ],
  };

  return (
    <Layout seo={seo} path={path}>
      <>
        <div>
          <button
            onClick={connect}
            className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
            style={{ marginTop: 100 }}
          >
            Connect to MetaMask
          </button>
        </div>
        {active ? (
          <span>
            Connected with <b>{account}</b>
          </span>
        ) : (
          <span>Not connected</span>
        )}
        <div>
          <button
            onClick={deactivate}
            className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
          >
            Disconnect
          </button>
        </div>
      </>
    </Layout>
  );
};

export default web3;
