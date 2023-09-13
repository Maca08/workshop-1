import Generator from '@/components/Generator';
import Validator from '@/components/Validator';

const Home = () => (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      <div className="flex flex-col gap-2">
        <div>Validate token</div>
        <Validator />
      </div>
      <div className="flex flex-col gap-2">
        <div>Generate token</div>
        <Generator />
      </div>
    </div>
  </main>
);

export default Home;
