# Menew Test

This is a project for displaying food-related videos and images using the Pixabay API with virtual scroll. The project uses Next.js and TypeScript to fetch and display the data dynamically.

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/alirni/menew-test.git
   ```
   
2. Navigate into the project directory:

   ```bash
   cd menew-test
   ```
      
3. Install the required dependencies:

   ```bash
   npm install
   ```

## How to Run

To run the project locally, use the following command:
   ```bash
   npm run dev
   ```
This will start the Next.js development server. You can view the project by visiting http://localhost:3000 in your browser.


### Create .env File and Set API Key
1.	Create a .env file in the root of your project directory.
2.	Add the following environment variable in the .env file:

```env
NEXT_PUBLIC_PIXABAY_API_KEY=your_pixabay_api_key
NEXT_PUBLIC_PIXABAY_BASE_URL=https://pixabay.com/api/
```
Replace your_pixabay_api_key with your actual Pixabay API key. You can get your API key by signing up on Pixabay.

3.	Once the .env file is created and the API key is set, you can start the project using npm run dev as described above.

