import React from 'react';
import {render, fireEvent, waitForElement, wait} from 'react-testing-library';
import {FetchMock} from '@react-mock/fetch';
import RandomImage from '../RandomImage';


const url_l = "https://live.staticflickr.com/65535/47725246341_904640608a_b.jpg";
const url_c = "https://live.staticflickr.com/65535/47725246341_904640608a_c.jpg";

const renderComponent = (interval) =>
  render(
    <FetchMock
      mocks={[
        {
          matcher: 'begin:http://api.flickr.com/services/rest', method: 'GET', response: {
            "photos": {
              "photo": [{url_l}]
            }
          },
          repeat: 1
        },
        {
          matcher: 'begin:http://api.flickr.com/services/rest', method: 'GET', response: {
            "photos": {
              "photo": [{url_c}]
            }
          },
          overwriteRoutes: false
        },
      ]}
    >
      <RandomImage interval={interval}/>
    </FetchMock>
  );

it('renders fetched image', async () => {
  const {getByAltText} = renderComponent(99999);
  await waitForElement(() => getByAltText(/random/i));
});

it('changes image src by interval', async () => {
  const {getByAltText} = renderComponent(1);
  const element = await waitForElement(() => getByAltText(/random/i));

  expect(element.src).toBe(url_l);
  await wait(() => expect(element.src).toBe(url_c))
});

it('changes image src by click', async () => {
  const {getByAltText} = renderComponent(10);
  const element = await waitForElement(() => getByAltText(/random/i));

  expect(element.src).toBe(url_l);
  fireEvent.click(element);
  await wait(() => expect(getByAltText(/random/i).src).toBe(url_c))
});
