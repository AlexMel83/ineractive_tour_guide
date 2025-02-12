export default defineEventHandler(async (event) => {
  const response = await $fetch('https://api.ukrainealarm.com/api/v3/alerts/1396', {
    method: 'GET',
  });
  console.log(response);

  return response;
});
