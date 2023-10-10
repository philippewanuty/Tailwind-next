import { BodyPage } from '@/components/SettingsTabs/BodyPage';
import { HorizontalTabs } from '@/components/SettingsTabs/HorizontalTabs';

export default function Home() {
  return (
    //Main
    <>
      <h1 className=" text-3xl font-medium text-zinc-900">Settings</h1>

      <HorizontalTabs />

     
        <BodyPage />
     

    </>
  );
}
