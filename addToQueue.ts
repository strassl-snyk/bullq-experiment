import {analysisQueue, jobData} from './index';

//adding into the queue on a seperate thread. Just like in sast-api + worker scenario


analysisQueue.add("exampleJob1", jobData, {
    jobId: 44444,
  });
analysisQueue.add("exampleJob2", jobData, {
    jobId: 5555555,
  });
analysisQueue.add("exampleJob2", jobData, {
    jobId: 66666,
  });