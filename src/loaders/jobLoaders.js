import { getShoppingCart } from '../utilities/fakedb';

const jobLoaders = async () => {
  const loadedJobs = await fetch('/jobs.json');
  const jobs = await loadedJobs.json();
  const savedJobs = getShoppingCart();
  let storedJobs = [];
  for (const id in savedJobs) {
    const foundJob = jobs.jobs.find((job) => job.id === id);
    if (foundJob) {
      storedJobs.push(foundJob);
    }
  }
  return storedJobs;
};

export default jobLoaders;
