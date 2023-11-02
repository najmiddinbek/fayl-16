const getTopics = async () => {
    const apiUrl = process.env.API_URL;

    try {
        const res = await fetch(`${apiUrl}/api/topics`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('topiclarr yuklanmadi');
        }

        return res.json();
    } catch (error) {
        console.log('topiclarr yuklanishda xatolik: ', error);
        return { topiclar: [] };
    }
};

export default async function Count() {
    const { topiclar } = await getTopics()
    return (
        <div>
            <div>Newly Added Topics Count: {topiclar.length}</div>
        </div>
    );
}