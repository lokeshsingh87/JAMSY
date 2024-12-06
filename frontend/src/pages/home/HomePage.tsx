import Topbar from "@/components/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionGrid from "./components/SectionGrid";
import { usePlayerStore } from "@/stores/usePlayerStore";


const HomePage = () => {
	const { user } = useUser();
	const {
		fetchMadeForYouSongs,
		isLoading,
		madeForYouSongs,
	} = useMusicStore();
	
	const { initializeQueue } = usePlayerStore();
	
	useEffect(() => {
		
		fetchMadeForYouSongs();
	}, [fetchMadeForYouSongs]);

	useEffect(() => {
		if (madeForYouSongs.length > 0 ) {
			const allSongs = [ ...madeForYouSongs];
			initializeQueue(allSongs);
		}
	}, [initializeQueue, madeForYouSongs, ]);

	return (
		<main className='rounded-md overflow-hidden h-full bg-teal-900'>
			<Topbar />
			<ScrollArea className='h-[calc(100vh-180px)]'>
				<div className='p-4 sm:p-6'>
					<h1 className='text-2xl sm:text-3xl font-bold mb-6'>Welcome {user?.fullName}</h1>
					
					<div className='space-y-8'>
						<SectionGrid title='Made For You' songs={madeForYouSongs} isLoading={isLoading} />
						
					</div>
				</div>
			</ScrollArea>
		</main>
	);
};
export default HomePage;
