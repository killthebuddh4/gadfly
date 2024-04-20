-- DropForeignKey
ALTER TABLE "ActorLog" DROP CONSTRAINT "ActorLog_actor_id_fkey";

-- DropForeignKey
ALTER TABLE "ActorLog" DROP CONSTRAINT "ActorLog_log_id_fkey";

-- DropForeignKey
ALTER TABLE "AttachedLog" DROP CONSTRAINT "AttachedLog_sink_log_id_fkey";

-- DropForeignKey
ALTER TABLE "AttachedLog" DROP CONSTRAINT "AttachedLog_source_log_id_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_actor_id_fkey";

-- DropForeignKey
ALTER TABLE "ImageSignal" DROP CONSTRAINT "ImageSignal_image_id_fkey";

-- DropForeignKey
ALTER TABLE "ImageSignal" DROP CONSTRAINT "ImageSignal_signal_id_fkey";

-- DropForeignKey
ALTER TABLE "Signal" DROP CONSTRAINT "Signal_log_id_fkey";

-- AlterTable
ALTER TABLE "Signal" ALTER COLUMN "index" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "AttachedLog" ADD CONSTRAINT "AttachedLog_source_log_id_fkey" FOREIGN KEY ("source_log_id") REFERENCES "Log"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttachedLog" ADD CONSTRAINT "AttachedLog_sink_log_id_fkey" FOREIGN KEY ("sink_log_id") REFERENCES "Log"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signal" ADD CONSTRAINT "Signal_log_id_fkey" FOREIGN KEY ("log_id") REFERENCES "Log"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorLog" ADD CONSTRAINT "ActorLog_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorLog" ADD CONSTRAINT "ActorLog_log_id_fkey" FOREIGN KEY ("log_id") REFERENCES "Log"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageSignal" ADD CONSTRAINT "ImageSignal_signal_id_fkey" FOREIGN KEY ("signal_id") REFERENCES "Signal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageSignal" ADD CONSTRAINT "ImageSignal_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
