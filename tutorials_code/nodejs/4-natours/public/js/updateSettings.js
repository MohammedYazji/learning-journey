/* eslint-disable */
// here I will use axios to update the settings
// so I will use fetch api instead of using the form to update the settings
// the way by updating data using our API better than using the form in error handling
import axios from 'axios';
import { showAlert } from './alerts';

export const updateData = async (name, email) => {
  try {
    // result
    const res = await axios({
      method: 'PATCH',
      url: 'http://localhost:3000/api/v1/users/updateMe',
      data: {
        name,
        email,
      },
    });

    // implement that when i make the update request and the response get with status success so reload the page
    if (res.data.status === 'success') {
      showAlert('success', 'Data updated successfully!');
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
