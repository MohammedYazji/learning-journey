# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- useRef	 vs label & htmlFor
--there are two ways to hidden input and access it from another way--
1- if i want to access it from label link it using htmlFor and id as (ProfilePage)
2- if i want to access it from another button or element use useRef as ref and when click on the btn will access the input -->

<!-- onload vs onloadend
** reader.readAsDataURL(file) : must call after onloadend
** reader.readAsDataURL(file) : must call brfore onload

onloadend run either success or error in the code
 => in MessageInput component if we add an image or either remove it (null) will update the image using setImagePreview so we use onloadend here

 onload just run if true
 => in ProfilePage we use it because we can just add image (success) there is no error (null)
 -->
