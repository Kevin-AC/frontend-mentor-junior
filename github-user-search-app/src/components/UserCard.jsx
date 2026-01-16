export default function UserCard(){
    return(
        <article className="w-full h-155 py-8 px-6 bg-Neutral-800 rounded-2xl">
            <header className="flex gap-6 items-center">
                <img className="w-17.5 h-17.5" src="/assets/User profile.svg" alt="User profile" />
                <div className="text-Neutral-0 space-y-1">
                    <h1 className="text-[26px] font-bold">The Octocat</h1>
                    <p className="text-Blue-300">@octocat</p>
                    <p className="text-[15px]/[1.5]">Joined 25 Jan 2011</p>
                </div>
            </header>
            <p className="text-[15px]/[1.5] text-Neutral-0 opacity-70 mb-6 mt-8">This profile has no bio</p>
            <section className="bg-Neutral-900 h-57.25 p-4 rounded-[10px] opacity-100 ">
                <dl className=" space-y-4">
                    <div>
                        <dt className="stat-label">Repos</dt>
                        <dd className="stat-number">8</dd>
                    </div>
                    <div>
                        <dt className="stat-label">Followers</dt>
                        <dd className="stat-number">3938</dd>

                    </div>
                    <div>
                        <dt className="stat-label">Following</dt>
                        <dd className="stat-number">9</dd>
                    </div>
                </dl>

            </section>
        </article>
    )
}