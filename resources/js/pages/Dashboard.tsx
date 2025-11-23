import { usePage, Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

export default function Dashboard() {
    interface User {
        id: number;
        name: string;
        email: string;
        created_at: string;
    }

    interface Stats {
        users_total: number;
    }

    const { user, stats, latest_users } = usePage().props as unknown as {
        user: User;
        stats: Stats;
        latest_users: User[];
    };

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
    ];

    const chartData = [
        { name: 'Usuários', total: stats.users_total },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="p-4 flex flex-col gap-6">

                {/* ==================== CARDS SUPERIORES ==================== */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Card 1 - Usuário logado */}
                    <div className="p-6 rounded-xl border bg-white dark:bg-neutral-900 shadow">
                        <h2 className="text-xl font-semibold mb-2">Bem-vindo!</h2>
                        <p className="text-lg">
                            <strong>{user.name}</strong>
                        </p>
                        <p className="text-sm text-neutral-500">{user.email}</p>
                    </div>

                    {/* Card 2 - Total de usuários */}
                    <div className="p-6 rounded-xl border bg-white dark:bg-neutral-900 shadow">
                        <h2 className="text-xl font-semibold mb-2">Total de usuários</h2>
                        <p className="text-4xl font-bold text-blue-600">
                            {stats.users_total}
                        </p>
                    </div>

                    {/* Card 3 - Gráfico pequeno */}
                    <div className="p-6 rounded-xl border bg-white dark:bg-neutral-900 shadow">
                        <h2 className="text-xl font-semibold mb-2">Gráfico</h2>
                        <div className="h-40">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="total" fill="#3b82f6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* ==================== TABELA DE ÚLTIMOS USUÁRIOS ==================== */}
                <div className="rounded-xl border bg-white dark:bg-neutral-900 shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Últimos usuários cadastrados</h2>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2">ID</th>
                                <th className="p-2">Nome</th>
                                <th className="p-2">E-mail</th>
                                <th className="p-2">Criado em</th>
                            </tr>
                        </thead>
                        <tbody>
                            {latest_users.map((u) => (
                                <tr key={u.id} className="border-b hover:bg-neutral-100 dark:hover:bg-neutral-800">
                                    <td className="p-2">{String(u.id).padStart(3, "0")}</td>
                                    <td className="p-2">{u.name}</td>
                                    <td className="p-2">{u.email}</td>
                                    <td className="p-2">
                                        {new Date(u.created_at).toLocaleDateString('pt-BR')}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </AppLayout>
    );
}
