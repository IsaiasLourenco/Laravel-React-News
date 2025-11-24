import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { settingsAppearance } from '@routes';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Trocar aparência',
        href: editAppearance().url,
    },
];

export default function Appearance() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Trocar aparência" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Trocar aparência"
                        description="Atualize os padrões de aparência da sua conta"
                    />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
