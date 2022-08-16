from telethon import TelegramClient, client

# Use your own values from my.telegram.org
api_id = 12440190
api_hash = "b72710ea0c2fec3feae7b1e88172e866"
client = TelegramClient("anon", api_id, api_hash, proxy=("socks5", "127.0.0.1", 1089))


async def main():
    # me = await client.get_me()
    # print(me.stringify())
    # while True:
    for x in range(100):
        await client.send_message("Ali_ARtk", "fuck you :)")


with client:
    client.loop.run_until_complete(main())

# # The first parameter is the .session file name (absolute paths allowed)
# with TelegramClient(
#     "anon", api_id, api_hash, proxy=("socks5", "127.0.0.1", 1089)
# ) as client:
#     for x in range(25):
#         # while True:
#         client.loop.run_until_complete(
#             client.send_message(86161386, "this is telethon api on python  :) ")
#         )
